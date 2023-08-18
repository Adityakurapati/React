const express=require( 'express' );
const router=express.Router();

// router.get( '/', function ( req, res )
// {
//      res.sendFile('./')
// } )
router.route( '/:username' )
     .get( ( req, res ) =>
     {
          console.log( 'GITHUB' )
     } )

module.exports=router;