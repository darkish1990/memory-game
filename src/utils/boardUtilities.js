export function validateCouples(couples) {
  return (
    couples.length === 2 &&
    couples[0].id !== couples[1].id &&
    couples[0].type === couples[1].type
  );
}
export function cardAlreadyIncouples(couples, card) {
  return couples.length > 0 && couples.includes(card.id);
}
export function couplesFull(couples) {
  return couples.length === 2;
}
export function resetCouplesAfter(time,setCouples) {
    setTimeout(() => {
      setCouples([]);
    }, time);
  }