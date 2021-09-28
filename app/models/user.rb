class User < ApplicationRecord
    has_secure_password
    has_many :images
    has_many :posts
    has_many :hobbies, through: :posts
    has_many :comments
    has_many :posts, through: :comments

end