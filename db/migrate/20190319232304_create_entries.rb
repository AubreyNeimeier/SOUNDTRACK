class CreateEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :entries do |t|
      t.string :cuid
      t.string :entry_text
      t.date :date
      t.timestamps null: false
    end
  end
end
