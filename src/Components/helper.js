export function sortResult(result) {
  if (result.data && result.data.length > 0) {
    result.data.sort(function(a, b) {
      if (a.listorder > b.listorder) {
        return -1;
      }
      if (b.listorder > a.listorder) {
        return 1;
      }
      return 0;
    });
  }
  return result;
}

export default sortResult;
