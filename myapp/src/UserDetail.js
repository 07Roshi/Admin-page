import React from 'react';
import { useParams, Link } from 'react-router-dom';

const UserDetail = ({ users }) => {
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="p-4 rounded bg-gradient-to-r from-indigo-400 to-cyan-400">
        <div className="flex items-center justify-start mb-4">
          <div className="p-2 bg-blue-600 rounded-full">
            <img src={user.image} alt={user.name} className="w-8 h-8 rounded-full" />
          </div>
          <div className="ml-2">
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-gray-700">{user.role}</p>
          </div>
        </div>
        <h3 className="text-lg font-semibold mt-8 mb-4">Projects</h3>
        <div className="grid grid-cols-3 gap-4">
          {user.projects.map((project) => (
            <div key={project.id} className="p-4 bg-white rounded shadow hover:bg-gray-100">
              <div className="flex items-center mb-2">
                <img src={user.image} alt={project.title} className="w-8 h-8 rounded-full" />
                <h4 className="text-md font-semibold ml-2">{project.title}</h4>
              </div>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
        <h3 className="text-lg font-semibold mt-8 mb-4">Services</h3>
        <div className="grid grid-cols-3 gap-4">
          {user.services.map((service) => (
            <div key={service.id} className="p-4 bg-white rounded hover:bg-gray-100">
              <div className="flex items-center mb-2">
                <img src={user.image} alt={service.title} className="w-8 h-8 rounded-full" />
                <h4 className="text-md font-semibold ml-2">{service.title}</h4>
              </div>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <h3 className="text-lg font-semibold mt-8 mb-4">Testimonials</h3>
        <div className="grid grid-cols-3 gap-4">
          {user.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-4 bg-white rounded shadow hover:bg-gray-100">
              <div className="flex items-center mb-2">
                <img src={user.image} alt={testimonial.name} className="w-8 h-8 rounded-full" />
                <h4 className="text-md font-semibold ml-2">{testimonial.name}</h4>
              </div>
              <p>{testimonial.comment}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <br></br>
          <Link to="/" className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-800">Back to Users</Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;