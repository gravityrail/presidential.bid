namespace :graphql do
	task :dump_schema => :environment do
		# require 'app/graph/presidential_schema'
		require 'json'
		query = GraphQL::Query.new(PresidentialSchema, GraphQL::Introspection::INTROSPECTION_QUERY)
		result_hash = query.result
		File.open(File.join(Rails.root, 'db', 'schema.json'), 'w') {|f| f.write(JSON.dump(result_hash)) }
	end
end