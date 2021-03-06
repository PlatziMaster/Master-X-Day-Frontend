const getTrello = async () => {
  const url =
    "https://api.trello.com/1/members/me/boards?key=268e5bc2c97b4f60346c936fd9aa4500&token=101f5130b897ae9523efd71f3b31683b0ae17ce05b556b25c3808d17cf838c03";
  const response = await fetch(url);
  const { data } = await response.json();
  const trello = data.map((t) => {
    return {
      name: t.name,
      url: t.shortUrl,
      date: t.dateLastView,
    };
  });

  console.log(trello);

  return trello;
};

getTrello();

export default getTrello;
