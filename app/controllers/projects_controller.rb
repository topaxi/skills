class ProjectsController < PersonRelationsController
  self.permitted_attrs = %i[description title role technology
                          year_to year_from person_id]
end
