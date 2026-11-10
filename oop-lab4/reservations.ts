// Lab 4 — Part 4

class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  size(): number {
    return this.items.length;
  }

  // Task 1
  includes(item: T): boolean {
    return this.items.includes(item);
  }
}

// Task 2
class Book {
  private title: string;
  private borrower: string | undefined;
  private reservations: Queue<string>;

  constructor(title: string) {
    this.title = title;
    this.borrower = undefined;
    this.reservations = new Queue<string>(); 
  }

  borrow(member: string): boolean {
    // 1.
    if (this.borrower === member || this.reservations.includes(member)) return false;
    // 2.
    if (this.borrower === undefined) {
      this.borrower = member;
      return true;
    }
    this.reservations.enqueue(member);
    return false;
  }

  giveBack(): boolean {
    if (this.borrower === undefined) return false;
    this.borrower = this.reservations.dequeue();
    return true;
  }

  getBorrower(): string | undefined {
    return this.borrower;
  }

  waiting(): number {
    return this.reservations.size();
  }
}

const book = new Book("So Long a Letter");
console.log(book.borrow("Awa"), book.borrow("Moussa"), book.borrow("Fatou"));
console.log(book.getBorrower(), book.waiting());
console.log(book.borrow("Moussa"), book.waiting());
console.log(book.giveBack(), book.getBorrower(), book.waiting());
console.log(book.giveBack(), book.giveBack(), book.giveBack(), book.getBorrower());

const numbers = new Queue<number>();
numbers.enqueue(10);
numbers.enqueue(20);
console.log(numbers.includes(20), numbers.includes(30));