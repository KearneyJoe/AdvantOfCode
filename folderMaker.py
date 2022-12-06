import os

FILE_PATH = '/Users/joekearney/Desktop/AdventOfCode'  
root_path = FILE_PATH
  
for i in range(7, 26):
    if(i < 10):
        folder_num = '0{}'.format(i)
    else:
        folder_num = i
    
    folder_name = 'Day{}'.format(folder_num)
    day_js = 'day{}.js'.format(folder_num)
    day_txt = 'day{}.txt'.format(folder_num)
    dummy_txt = 'dummy.txt'
    os.mkdir(os.path.join(root_path, folder_name))
    open(os.path.join(root_path, folder_name, day_js),'w')
    open(os.path.join(root_path, folder_name, day_txt),'w')
    open(os.path.join(root_path, folder_name, dummy_txt),'w')