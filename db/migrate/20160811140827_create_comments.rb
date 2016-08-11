class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.text :body, null: false
      t.integer :song_id, null: false
    end

    add_index :comments, :song_id
  end
end
