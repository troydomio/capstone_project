# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
User.create(name: "emy", password: "password")

Image.create(title: "my face", description: "it's my face", image_url: "https://i.natgeofe.com/n/24d91fd0-3207-43a7-b783-73e70deb0778/2914549247_ce26f3f723_b.jpg?w=636&h=956", user_id: 1)
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)