/*
 * Filename: sophisticated_code.js
 * Description: This code demonstrates a complex simulation of a social network with various functionalities.
 */

class User {
  constructor(name, age, friends) {
    this.name = name;
    this.age = age;
    this.friends = friends;
    this.posts = [];
  }

  addFriend(friend) {
    this.friends.push(friend);
  }

  createPost(content) {
    this.posts.push(content);
  }

  likePost(postId, friend) {
    const post = this.posts.find(post => post.id === postId);
    if (post) {
      post.likes.push(friend);
    }
  }

  commentPost(postId, friend, comment) {
    const post = this.posts.find(post => post.id === postId);
    if (post) {
      post.comments.push({ friend, comment });
    }
  }
}

class Post {
  constructor(id, content, likes, comments) {
    this.id = id;
    this.content = content;
    this.likes = likes;
    this.comments = comments;
  }
}

// Create sample users
const user1 = new User("John Doe", 25, []);
const user2 = new User("Jane Smith", 30, [user1]);
const user3 = new User("Bob Williams", 40, []);

// User interactions
user1.addFriend(user2);
user2.createPost(new Post(1, "Hello, world!", [user1], []));
user2.likePost(1, user1);
user2.commentPost(1, user3, "Nice post!");

console.log(user2); // Output the updated user object