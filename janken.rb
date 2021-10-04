puts "じゃんけん...ポン！"


def janken
  puts "0(グー)1(チョキ)2(パー)3(戦わない)"
  a = gets.to_i
  if a==3
      puts "戦いません!!"
      exit
  end
  b = rand(3)
jankens = ["グー", "チョキ", "パー"]
 puts "ポン！！"
 puts "--------------"
 puts "あなた：#{jankens[a]}を出しました"
 puts "相　手：#{jankens[b]}を出しました"
 puts "--------------"
 
 
 if a == b
puts "あいこで...ショ！"
 return true
 
 
 
 
 
 elsif  (a == 0 && b == 1) || (a == 1 && b == 2) || (a == 2 && b == 0) 
   puts "あっちむいて〜"
   puts "0(上)1(下)2(左)3(右)"
   
   c = gets.to_i
   d = rand(3)
   yubisasi = ["上", "下", "左", "右"]
   puts "ホイ！"
   puts "--------------"
   puts "あなた：#{yubisasi[c]}を出しました"
   puts "相　手：#{yubisasi[d]}を出しました"
  
  if c == d
    puts "あなたの勝ちです！！"
    exit
  else
    puts"残念！！" 
    return true
  end
 
 
 
 elsif  (a == 0 && b == 2) || (a == 1 && b == 0) || (a == 2 && b == 1) 
   puts "あっちむいて〜"
   puts "0(上)1(下)2(左)3(右)"
   
   e = gets.to_i
   f = rand(3)
   yubisasi2 = ["上", "下", "左", "右"]
   puts "ホイ！"
   puts "--------------"
   puts "あなた：#{yubisasi2[e]}を出しました"
   puts "相　手：#{yubisasi2[f]}を出しました"
  
  if e == f
    puts "負けました！！"
    exit
  else
    puts"危ない！！"
    return true
  end
 
 end
 
 
  
 
 
 end
 
 next_game = true
 
 while next_game
  next_game = janken
   
 end
 
 