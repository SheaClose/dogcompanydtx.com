function storeService ($http){
  this.getAllProducts = () =>{
    return $http.get("/api/products").then((response)=>{
      return response;
    })
  }
  this.addToCart = (ttl, sz) => {
    return $http.post("/api/cart", {title: ttl, size: sz});
  }
}
export default storeService;
