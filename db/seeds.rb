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
Image.create(title: "the gals", description: "luv y'all 4eva", image_url: "https://m.media-amazon.com/images/I/61yXL70-RaL._SX679_.jpg", user_id: 1)
Image.create(title: "old pic", description: "#tbt", image_url: "https://images.theconversation.com/files/401955/original/file-20210520-23-83r6ds.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop", user_id: 1)
Image.create(title: "scary pic", description: "scary vibes", image_url: "https://www.popsci.com/uploads/2019/03/18/WEPPVOVTYPHVPEIZBFVKVL4H5I.jpeg?width=785", user_id: 1)

#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)