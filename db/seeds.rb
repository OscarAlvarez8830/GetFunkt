# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all

user1 = User.create!(
  username: "guest",
  password: "password"
) # id: 1

user2 = User.create!(
  username: "MacDaddy",
  password: "password"
) # id: 2

user3 = User.create!(
  username: "DrJay",
  password: "password"
) # id: 3

user4 = User.create!(
  username: "BeetsForDaze",
  password: "password"
) # id: 4

Song.destroy_all

song1 = Song.create!(
  title: 'First',
  artist: 'Someone',
  user_id: user1.id
) # id: 1

song2 = Song.create!(
  title: 'Second',
  artist: 'Someone',
  user_id: user1.id
) # id: 2

song3 = Song.create!(
  title: 'Third',
  artist: 'Someone',
  user_id: user2.id
) # id: 3

song4 = Song.create!(
  title: 'Fourth',
  artist: 'Someone',
  user_id: user3.id
) # id: 4

song5 = Song.create!(
  title: 'Fifth',
  artist: 'Someone',
  user_id: user4.id
)

Like.destroy_all

Like.create!(
  user_id: user1.id,
  song_id: song4.id
) # id: 1

Like.create!(
  user_id: user2.id,
  song_id: song1.id
) # id: 2

# Like.create!(
#   user_id: 1,
#   song_id: 1
# ) # id: 3
