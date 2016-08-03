class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.string :artist, null: false
      t.integer :user_id, null: false
    end
    add_index :songs, :user_id
  end
end
