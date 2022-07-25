export const updateObjectInArray = (items, itemId, objPropName, newObj) => {
   return items.users.map((u) => {
          if (u[objPropName] === itemId) {
            return { ...u, ...newObj };
          }
          return u;
        })
    }