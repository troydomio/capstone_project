class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image
  has_one :user
  has_one :hobby
end
