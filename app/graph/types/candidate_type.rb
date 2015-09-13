# type Candidate : Character {
#   id: String!
#   name: String
#   friends: [Character]
#   appearsIn: [Episode]
#   homePlanet: String
# }
CandidateType = GraphQL::ObjectType.define do
  name "Candidate"
  description "Someone who's running for president"
  # interfaces [CandidateInterface]

  # bang on the types helper ensures values are not null
  field :id, !types.String, "The unique ID of this person"
  field :name, !types.String, "The name of this person"
  field :slogan, !types.String, "The slogan they are running on"
  # field :friends, types[CharacterInterface], "Friends of this person"
  # field :appearsIn, types[EpisodeEnum], "Episodes this person appears in"
  # field :homePlanet, types.String, "Where this person is from", property: :home_planet
end

