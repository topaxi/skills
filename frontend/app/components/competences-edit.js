import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({

  i18n: service(),

  actions: {
    submit(changeset, event) {
      event.preventDefault();
      return changeset.save()
        .then(competence => this.sendAction('done'))
        .then(() => this.get('notify').success('Kompetenzen wurden aktualisiert!'))
        .catch(() => {
          let competence = this.get('competence');
          let errors = competence.get('errors').slice(); // clone array as rollbackAttributes mutates

          competence.rollbackAttributes();
          errors.forEach(({ attribute, message }) => {
            let translated_attribute = this.get('i18n').t(`competence.${attribute}`)['string']
            this.get('notify').alert(`${translated_attribute} ${message}`, { closeAfter: 10000 });
          });
        });
    }
  }
});
