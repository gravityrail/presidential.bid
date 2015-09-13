# type Query {
#   candidate: Candidate
#   human(id: String!): Human
#   droid(id: String!): Droid
# }
QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "The query root for this schema"

  field :candidates do
    type types[CandidateType]
    
    argument :parties, types[types.String], "candidate parties to include"

    resolve -> (object, arguments, context) {
      Candidate.order("created_at desc").all
    }
  end

  field :candidate, CandidateType, field: FetchField.new(type: CandidateType, model: Candidate)
end
