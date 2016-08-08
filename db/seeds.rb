# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(
  username: "guest",
  password: "password"
) # id: 1

User.create!(
  username: "MacDaddy",
  password: "password"
) # id: 2

User.create!(
  username: "DrJay",
  password: "password"
) # id: 3

User.create!(
  username: "BeetsForDaze",
  password: "password"
) # id: 4


Song.create!(
  title: 'Something',
  artist: 'Someone',
  user_id: 1
) # id: 1

Song.create!(
  title: 'Something',
  artist: 'Someone',
  user_id: 1
) # id: 2

Song.create!(
  title: 'Something',
  artist: 'Someone',
  user_id: 2
) # id: 3

Song.create!(
  title: 'Something',
  artist: 'Someone',
  user_id: 3
) # id: 4

Song.create!(
  title: 'Something',
  artist: 'Someone',
  user_id: 4
)

Like.create!(
  user_id: 1,
  song_id: 4
) # id: 1

Like.create!(
  user_id: 2,
  song_id: 1
) # id: 2

# Like.create!(
#   user_id: 1,
#   song_id: 1
# ) # id: 3
