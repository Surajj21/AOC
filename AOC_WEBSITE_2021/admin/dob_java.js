var b;
function show_dob()
{

   if(b==0)
   {
    document.getElementById("dob_corr").style.display="none";
    return b=1
   }
   else(b==1)
   {
    document.getElementById("dob_corr").style.display="inline-flex";
    return b=0

   }
}
