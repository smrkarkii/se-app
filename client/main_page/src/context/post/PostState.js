import React, { useState } from "react";
import PostContext from "./postContext";

const PostState = (props) => {
  const host = "http://localhost:5000";
  const postsInitial = [];
  const servicesInitial = [];
  const contactsInitial = [];
  const reservationsInitial = [];
  
  const [posts, setPosts] = useState(postsInitial);
  const [services, setServices] = useState(servicesInitial);
  const [contacts, setContacts] = useState(contactsInitial);
  const [reservations, setReservations] = useState(reservationsInitial);
  const [loading, setLoading] = useState(true);
  //get all posts
  const getPosts = async () => {
    //API call
    setLoading(true);
    const response = await fetch(`${host}/api/posts/fetchallposts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setLoading(false);
    console.log(json);
    setPosts(json);
  };

   //get all reservations
   const getReservations = async () => {
    //API call
    const response = await fetch(`${host}/api/reservations/fetchallreservations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    console.log(json);
    setReservations(json);
  };

   //get all contacts
   const getContacts = async () => {
    //API call
    const response = await fetch(`${host}/api/contacts/fetchallcontacts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    console.log(json);
    setContacts(json);
  };

  //get all services
  const getServices = async () => {
    //API call
    const response = await fetch(`${host}/api/services/fetchallservices`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    console.log(json);
    setServices(json);
  };

  //Add a post
  const addPost = async (title,type,instructor,participants,organizer,description) => {
    //API call
    const response = await fetch(`${host}/api/posts/addposts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title,type,instructor,participants,organizer,description}),
    });

    const post = await response.json();
    setPosts(posts.concat(post));
  };

    //Add a service
    const addService = async (title,description,starting_date,ending_date) => {
        //API call
        const response = await fetch(`${host}/api/services/addservices`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({title,description,starting_date,ending_date}),
        });
    
        const service = await response.json();
        setServices(services.concat(service));
      };

  //Delete a post
  const deletePost = async (id) => {
    //API call
    const response = await fetch(`${host}/api/posts/deleteposts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = response.json();
    console.log(json);

    // Logic to delete in client
    const newPosts = posts.filter((post) => {
      return post._id !== id;
    });
    setPosts(newPosts);
  };

   //Delete a reservation
   const deleteReservation = async (id) => {
    //API call
    const response = await fetch(`${host}/api/reservations/deletereservations/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = response.json();
    console.log(json);

    // Logic to delete in client
    const newReservations = reservations.filter((reservation) => {
      return reservation._id !== id;
    });
    setReservations(newReservations);
  };

   //Delete a contact
   const deleteContact = async (id) => {
    //API call
    const response = await fetch(`${host}/api/contacts/deletecontacts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = response.json();
    console.log(json);

    // Logic to delete in client
    const newContacts = contacts.filter((contact) => {
      return contact._id !== id;
    });
    setContacts(newContacts);
  };

    //Delete a service
    const deleteService = async (id) => {
        //API call
        const response = await fetch(`${host}/api/services/deleteservices/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = response.json();
        console.log(json);
    
        // Logic to delete in client
        const newServices= services.filter((service) => {
          return service._id !== id;
        });
        setServices(newServices);
      };

  //Edit a post
  const editPost = async (id, title, type,instructor,participants,organizer,description) => {
    //API call
    const response = await fetch(`${host}/api/posts/updateposts/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title,type,instructor,participants,organizer,description }),
    });
    const json = response.json();
    console.log(json);

    //Logic to edit in client
    for (let index = 0; index < posts.length; index++) {
      const element = posts[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.instructor = instructor;
        element.participants = participants;
        element.type = type;
        element.organizer = organizer;
      }
    }
  };

  return (
    <PostContext.Provider
      value={{ loading,posts,services,contacts,reservations,setContacts, setPosts,setServices, addPost,addService, deletePost,deleteService,deleteContact,deleteReservation, editPost, getPosts,getServices,getContacts,getReservations }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
