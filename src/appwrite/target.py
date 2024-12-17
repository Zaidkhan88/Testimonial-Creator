def searchRange(nums, target):
        
        end=-1
        start=-1
        low=0
        high=len(nums)-1
        while high>=low:
            
            mid = (high+low)//2
            print(mid)
            if nums[mid]==target:
                while mid>0 and nums[mid-1]==nums[mid]:
                    mid = mid-1
                    # print('mid>0')
                start = mid
                while mid<len(nums)-1 and nums[mid+1]==nums[mid]:
                    mid = mid+1
                end = mid
            elif nums[mid]>target:high = mid-1
            else: low = mid+1   
        return [start,end]     
nums = [5,7,7,8,8,10]
print(searchRange(nums,target=8))   