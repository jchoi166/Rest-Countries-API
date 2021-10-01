# Rest Countries API

[Rest Countries Live](https://practical-hoover-95d4bd.netlify.app/countries)

# Description
Rest Countries API is an application that allows you to search for different countries and view detailed information on each one. Users are able to filter results by region and view bordering countries. Also includes a dark mode! This project is a prompt provided by [Front End Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Only the design notes were provided by FEM, the rest of the application is built from scratch. 
Rest Countries API is built with React Hooks, Context API, and React Router. 

## Features

### Search
![Rest Countries API Search](https://res.cloudinary.com/dj9ptprsb/image/upload/v1633117375/RestCountries_Search_hrasv1.png)

* Users can search for new countries using the search bar.
* Users can also filter all countries by region using the dropdown menu on the right.
* Search bar uses an algorithm to list all countries that start with a partial word. i.e. only typing in the letter "A" wlll list all countries that start with the letter "A". 

### Card Details
![Rest Countries API Card Details](https://res.cloudinary.com/dj9ptprsb/image/upload/v1633117831/Rest_Countries_Saved_uypfdf.png)

* Clicking on a country will take the user to the card detail page. 
* The page display specific information about the country and displays a list of all bordering countries which the user can click on to reach that countries page. 

# Code Highlights

## Custom Hook to make API calls
Although the app only uses two different GET requests, I implemented a custom hook to send api calls in order to improve scalablity for any additional calls I might add in the future. 

```javascript
  function useHttp(requestFunction, startWithPending = false) {
    const [httpState, dispatch] = useReducer(httpReducer, {
      status: startWithPending ? 'pending' : null,
      data: null,
      error: null,
    });
  
    const sendRequest = useCallback(
      async function (requestData) {
        dispatch({ type: 'SEND' });
        try {
          const responseData = await requestFunction(requestData);
          dispatch({ type: 'SUCCESS', responseData });

        } catch (error) {
          dispatch({
            type: 'ERROR',
            errorMessage: error.message || 'Something went wrong!',
          });
        }
      },
      [requestFunction]
    );

    const updateData = (newData) => {
      dispatch({ type: 'UPDATE', newData})
    }
  
    return {
      updateData,
      sendRequest,
      ...httpState,
    };
}
```

## Future Additions
* Implement User authentication and profile feature so that the user may save any countries as they wish. 
* Improve filter algorithm so that the user may filter their search results with additional parameters i.e. population, size, etc. 

## *** IMPORTANT SIDE NOTE
Within the time I created this app until now, the Rest Countries API was acquired by Apilayer, an API microservices provider. The app still functions, however images will be broken. I sincerely apologize for the inconvenience! :(