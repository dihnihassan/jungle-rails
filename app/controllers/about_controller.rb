class AboutController < ApplicationController
  def index
    @company_name = "The Jungle"
    @company_founding = "2023"
    @company_address = "123 The Jungle Street, Toronto, Ontario"
  end
end
