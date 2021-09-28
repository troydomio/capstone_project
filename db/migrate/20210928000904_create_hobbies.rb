class CreateHobbies < ActiveRecord::Migration[6.1]
  def change
    create_table :hobbies do |t|
      t.string :name
      t.string :description
      t.string :image

      t.timestamps
    end
  end
end
