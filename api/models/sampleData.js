// Use this file to populate some initial sample data

// run mongod
mongod

// run mongo shell
mongo

// use the selfstarted db
use selfstarted

// dummy data being populated into Users collection
db.Users.insert({

  selfStartedUserName: "justinbesteman",
  userEmail: "justin@besteman.io",
  linkedInUserName: "unknown",
  linkedInUniqueId: "lKQTrIf0VT",
  lastLinkedInAPIRefresh: "2017-03-17T05:00:00.000Z",
  userLocation: "Orlando, Florida Area",
  willDoRemoteProjects: true,
  willDoLocalProjects: true,
  defaultSkillByCollege: "Business Administration",
  defaultSkillByProgram: "Economics",
  additionalSkills: "Juggling, Coding, Teaching",
  firstName: "Justin",
  lastName: "Besteman",
  userSchoolName: "University of Central Florida",
  userPhotoLink: "https://media.licdn.com/mpr/mprx/0_mjjX1d0o71NnHMVDeJFogOvId14nSH9lmJWXvjdoWCkcS4HlIJwoZYtoocz5aWMT3uL5RZAE8kcBwuRjFm44RjyQLkc9w2uT3m4FrpWwa5GsTVBjS0mWKebs5AD6G2RKeDyHBmV9i94",
  aboutMe: "blah blah",
  signUpDate: "2017-03-17T05:00:00.000Z",
  lastLoginDate: "2017-03-17T05:00:00.000Z",
  isActiveUser: true

})

// verify data was saved
db.Users.find().pretty()
