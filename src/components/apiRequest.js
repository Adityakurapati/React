const apiRequest=async ( url='', optionsObj=null, errorMsg=null ) =>
{
          try
          {
                    const response=await fetch( url, optionsObj );
                    if ( !response.ok ) throw Error( 'Please Reload Your Website ' );
          } catch ( err )
          {
                    errorMsg=err.message;
          } finally
          {
                    return errorMsg;
          }
}

export default apiRequest;