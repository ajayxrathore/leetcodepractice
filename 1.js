// two sum
function twoSum(nums,target){
    let seen ={}
    for (let i=0; i<nums.length;i++){
        let num=nums[i]
        let complement = target-num
        if(complement in seen){
            return [seen[complement],i]
        }
        seen[num]=i
    }
}
