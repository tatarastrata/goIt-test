# GoIt Test Assignment

## Description
You have to create an application that allows users to create a request for the transportation of your parcel or deliver another user's package.
Main pages:
- `/<id>/create` - select request type (order or deliver);
- `/<id>/create/order` - create order request;
- `/<id>/create/deliver` - create delivery request;
- `/<id>/requests` - list of all user requests;
- `/<id>` - redirect to `/<id>/requests`;
- `/requests` - list of all; 

`<id>` - defines the user. According to this parameter, the created request will be added to a certain user.
Request can be of two types: order and deliver. If a user wants to send a parcel, they should create an order type request. In other cases, users can deliver a parcel, and they should create a delivery request.
 
 The request creation form must have the following input fields:
- The city from which the parcel is sent (required)
- The city to which the parcel is sent (required)
- Type of parcel: gadgets, drinks, clothes, medicines, other (in case if you create order
type request)
- Date of dispatch
- Parcel description (in case if you create order type request)

The list of user requests must reflect all user-created requests and the provided information. The user must be able to edit the request using the dialog window and delete the request.
The request must have a list of requests that match the requests of other users. Matches are displayed according to the following principle: the same city from which the parcel is delivered, the same city where the parcel is delivered, and the delivery date of the delivery request no later than that stated in the order request
The list of all requests page must have all requests of all users. User have to be able to sort all requests by the date of sending, by default sort by the date of creation of requests.
## Requirements
1. The application has to be done using any framework
2. Build your project using builder
3. You have to use any CSS preprocessor
4. You have to use any UI framework or any CSS framework
5. You have to use routing in your work
6. You have to use state management
7. Store data should save in LocalStorage and exist after page reload