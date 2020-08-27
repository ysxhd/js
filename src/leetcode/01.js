//两数字之和
let nums = [2,5,5,11], target = 10;
export default () => {
    const numsMap = {};
    for (const index in nums) {
        let reduce = target - nums[index]; 
        if( numsMap[reduce]){
            return [index, numsMap[reduce]];
        } 
        numsMap[nums[index]] = index;
    }
    
}