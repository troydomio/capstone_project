# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
User.destroy_all
Image.destroy_all

User.create(username: "emy", name: "emy", password: "password")
User.create(username: "mari", name: "mari", password: "password")
User.create(username: "troy", name: "troy", password: "password")

Image.create(title: "cute pic of me", description: "summer 2002", image_url: "https://images.theconversation.com/files/72534/original/image-20150219-28209-ovexg7.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip", user_id: 1)
Image.create(title: "good times with my friends", description: "besties", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/2560px-Patates.jpg", user_id: 1)
Image.create(title: "the gals", description: "luv y'all 4eva", image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FFresh-Potato-1kg-Pack%2Fdp%2FB07BG5GZP2&psig=AOvVaw08YF_VCrXuC4G5UUKP-w9p&ust=1631933436482000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjtloGAhfMCFQAAAAAdAAAAABAP", user_id: 1)
Image.create(title: "old pic", description: "#tbt", image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftime.com%2F5813683%2Fboss-turns-herself-into-a-potato%2F&psig=AOvVaw08YF_VCrXuC4G5UUKP-w9p&ust=1631933436482000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjtloGAhfMCFQAAAAAdAAAAABAV", user_id: 1)
Image.create(title: "scary pic", description: "scary vibes", image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.popsci.com%2Fpotatoes-bad-for-you%2F&psig=AOvVaw08YF_VCrXuC4G5UUKP-w9p&ust=1631933436482000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjtloGAhfMCFQAAAAAdAAAAABAb", user_id: 1)

#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)