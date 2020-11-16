var createtime = (createtime) => {
  if(typeof createtime != 'undefined')
  {
    return createtime.substr(0,10)
  }else{
    return '--'
  }
}
export default createtime