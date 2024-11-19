{
  //learn spread operator
  //rest operator
  //destructuring

  //spread operator

  const bros1: string[] = ["yeasir", "fahid", "sohid"];
  const bros2: string[] = ["fahad", "tohob", "mohit"];

  bros1.push(...bros2);

  const mentors1 = {
    js: "jankor",
    css: "fahad",
    html: "yeasir",
  };
  const mentors2 = {
    prisma: "firoz",
    next: "tonmoy",
    cloud: "Nahid",
  };
  const mentorsList = {
    ...mentors1,
    ...mentors2,
  };

  //rest operator

  const greetFrend = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friends}`));
  };
  greetFrend("abul", "babul", "tabul");
}
