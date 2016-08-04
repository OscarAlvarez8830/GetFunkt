class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :song_id, null: false
      t.integer :user_id, null: false
    end

    add_index :likes, [:user_id, :song_id], unique: true
    add_index :likes, :user_id
    add_index :likes, :song_id
  end
end
