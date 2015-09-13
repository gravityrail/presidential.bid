class QueriesController < ApplicationController
  def new
  end

  def create
    query_string = params[:query]
    Rails.logger.warn query_string
    query_variables = params[:variables] || {}
    Rails.logger.warn query_variables.inspect
    query = GraphQL::Query.new(PresidentialSchema, query_string, variables: query_variables)
    Rails.logger.warn query.result.inspect
    render json: query.result
  end
end
