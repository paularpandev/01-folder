import React from 'react'

const Card = (props) => {
  console.log(props.picture);
  return (
    <div>
        <article class="profile-card" aria-label="Profile card">
    <div class="cover" role="img" aria-hidden="true">
      <div class="avatar" >
        
      </div>
    </div>

    <div class="card-body">
      <div class="name-row">
        <div class="name">
          <h2>{props.profileName}</h2>
          <p>{props.branch}• Boston, MA</p>
        </div>

        <div class="actions">
          <button class="btn btn-primary">Add Friend</button>
          <button class="btn btn-outline">Message</button>
        </div>
      </div>

      <div class="bio">Full-stack developer who loves building beautiful UIs, open-source, and weekend hikes. Coffee enthusiast ☕️</div>

      <div class="meta">
        <div class="meta-item">
          <b>{props.friends}</b>
          <span>Friends</span>
        </div>
        <div class="meta-item">
          <b>{props.followers}</b>
          <span>Followers</span>
        </div>
        <div class="meta-item">
          <b>{props.posts}</b>
          <span>Posts</span>
        </div>
      </div>
    </div>

    <div class="card-footer">
      <div>Joined: January 2018</div>
      <div class="socials">
        <a href="#" title="Facebook">f</a>
        <a href="#" title="Twitter">t</a>
        <a href="#" title="Instagram">ig</a>
      </div>
    </div>
  </article>
    </div>
  )
}

export default Card