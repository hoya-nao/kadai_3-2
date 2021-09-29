require "csv"


puts "1(新規でメモを作成) 2(既存のメモ編集する)"


memo_number = gets.to_i

 puts memo_number 

if memo_number == 1

 puts "新規でメモを作成します。"

 puts "拡張子を除いたファイル名を入力してください"

 file_name = gets.chomp

puts "「#{file_name}.csv」という名前のファイルを作成しました。"

 puts "メモしたい内容を記入してください"

 puts "完了したら Ctrl+D　を入力します"


memo_type = readlines


CSV.open("#{file_name}.csv", 'w') do |csv|

 csv << memo_type


end





elsif memo_number == 2

puts "拡張子を除いた既存のcsvファイル名を入力してください"

file_name = gets.chomp

name = file_name
puts "追記したい内容を入力してください"

puts "完了したら Ctrl+D　を入力します"

memo_type = readlines

 CSV.open("#{file_name}.csv",'a')do|csv|

 csv << memo_type

 end



else

 puts "1か2を選択してください"

end

redo