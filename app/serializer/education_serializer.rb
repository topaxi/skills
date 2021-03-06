class EducationSerializer < ApplicationSerializer
  attributes :id, :location, :title, :updated_by, :year_from, :year_to

  belongs_to :person, serializer: PersonUpdatedAtSerializer
end
