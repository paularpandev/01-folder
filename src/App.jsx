import React from 'react'
import Card from './components/card'

export const App = () => {

  const fullProfile=[
  {
    "profilePicture": "https://www.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?w=170&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimgc1&dpr=1.3&pid=3.1&rm=2",
    "name": "Arjun Mehta",
    "workingBranch": "Software Engineer",
    "friends": 520,
    "followers": 1200,
    "posts": 87
  },
  {
    "profilePicture": "https://example.com/img/user2.jpg",
    "name": "Priya Sharma",
    "workingBranch": "Graphic Designer",
    "friends": 430,
    "followers": 980,
    "posts": 65
  },
  {
    "profilePicture": "https://example.com/img/user3.jpg",
    "name": "Rahul Verma",
    "workingBranch": "Data Analyst",
    "friends": 610,
    "followers": 1500,
    "posts": 102
  },
  {
    "profilePicture": "https://example.com/img/user4.jpg",
    "name": "Sneha Das",
    "workingBranch": "Digital Marketer",
    "friends": 385,
    "followers": 740,
    "posts": 54
  },
  {
    "profilePicture": "https://example.com/img/user5.jpg",
    "name": "Vikram Singh",
    "workingBranch": "Mechanical Engineer",
    "friends": 450,
    "followers": 860,
    "posts": 91
  },
  {
    "profilePicture": "https://example.com/img/user6.jpg",
    "name": "Aditi Mukherjee",
    "workingBranch": "UI/UX Designer",
    "friends": 350,
    "followers": 700,
    "posts": 44
  },
  {
    "profilePicture": "https://example.com/img/user7.jpg",
    "name": "Karan Patel",
    "workingBranch": "Full Stack Developer",
    "friends": 520,
    "followers": 1120,
    "posts": 77
  },
  {
    "profilePicture": "https://example.com/img/user8.jpg",
    "name": "Riya Sen",
    "workingBranch": "Content Writer",
    "friends": 300,
    "followers": 650,
    "posts": 58
  },
  {
    "profilePicture": "https://example.com/img/user9.jpg",
    "name": "Sandeep Kumar",
    "workingBranch": "Cloud Engineer",
    "friends": 670,
    "followers": 1400,
    "posts": 120
  },
  {
    "profilePicture": "https://example.com/img/user10.jpg",
    "name": "Megha Roy",
    "workingBranch": "Business Analyst",
    "friends": 410,
    "followers": 900,
    "posts": 73
  }
]

console.log(fullProfile)

  return (
    <div className='parent'>
      {fullProfile.map(function(elem){
        return <Card profileName={elem.name} branch={elem.workingBranch} friends={elem.friends} followers={elem.followers} posts={elem.posts} picture={elem.profilePicture} />
      })}
      
    </div>
  )
}
export default App