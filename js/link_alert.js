function judgeNow(){
  const now = Date.now();
  const startDate = new Date('2024/4/7 21:00:00');
  const endDate = new Date('2024/5/5 21:00:00');
  if(startDate<=now&&now<=endDate){
    if(confirm("Discordサーバーに入場します。\nよろしいですか?")){
      window.open("https://discord.gg/tvMVtWYGGp","_blank");
    }
    return false;
  }else if(startDate>now){
    alert("4/7(日)21:00に開場いたします。\n今しばらくお待ちくださいませ。");
    return false;
  }else if(endDate>now){
    alert("5/5(日)21:00にて閉場いたしました。");
    return false;
  }
}