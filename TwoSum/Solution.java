class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer,Integer> map= new HashMap<Integer,Integer>();
        for(int i =0; i < nums.length; i++){
            int calculated= target - nums[i];
            if(map.containsKey(calculated)){
                return new int[] {map.get(calculated), i};
            }
            map.put(nums[i],i);
        }
        return nums;
    }
}