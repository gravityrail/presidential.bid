require 'test_helper'

class CandidatesControllerTest < ActionController::TestCase

  test "the index route exists" do
    get(:index)
    assert_response :ok
  end
end
