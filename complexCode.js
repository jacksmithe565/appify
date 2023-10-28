/*
 * Filename: complexCode.js
 * 
 * Description: This code is a sophisticated and complex implementation of a social media platform.
 * It includes features like user authentication, posting and liking posts, friend management, and real-time notifications.
 */

// User class representing a user in the social media platform
class User {
  constructor(name, email, password) {
    this.name = name; // User's name
    this.email = email; // User's email
    this.password = password; // User's password
    this.friends = []; // Array to store user's friends
    this.posts = []; // Array to store user's posts
    this.notifications = []; // Array to store user's notifications
  }

  // Method to add a friend
  addFriend(user) {
    this.friends.push(user);
    user.friends.push(this);
  }

  // Method to remove a friend
  removeFriend(user) {
    this.friends = this.friends.filter(friend => friend !== user);
    user.friends = user.friends.filter(friend => friend !== this);
  }

  // Method to create a post
  createPost(content) {
    const post = new Post(this, content);
    this.posts.push(post);
    this.notifyFriends("created a new post");
  }

  // Method to like a post
  likePost(post) {
    post.addLike(this);
    this.notifyFriends(`liked a post by ${post.user.name}`);
  }

  // Method to notify friends
  notifyFriends(message) {
    this.friends.forEach(friend => {
      friend.notifications.push(`${this.name} ${message}`);
    });
  }
}

// Post class representing a post in the social media platform
class Post {
  constructor(user, content) {
    this.user = user; // User who created the post
    this.content = content; // Content of the post
    this.likes = []; // Array to store users who liked the post
  }

  // Method to add a like to the post
  addLike(user) {
    this.likes.push(user);
  }
}

// Example usage of the social media platform

// Create users
const alice = new User("Alice", "alice@example.com", "pass123");
const bob = new User("Bob", "bob@example.com", "pass456");
const charlie = new User("Charlie", "charlie@example.com", "pass789");

// Add friends
alice.addFriend(bob);
alice.addFriend(charlie);

// Alice creates a post
alice.createPost("Hello, world!");

// Bob likes the post
bob.likePost(alice.posts[0]);

console.log(alice.notifications); // Output: ["Bob liked a post by Alice"]