
input_str = input() # Reading input from stdin
n, K = map(int, input_str.strip().split())

# list to hold check-in and check-out times
times = []

# loop through n lines of input
for i in range(n):
    check_in, check_out = map(int, input().split())
    times.append((check_in, 1))   # add 1 for check-in
    times.append((check_out, -1)) # subtract 1 for check-out

# sort times in ascending order by time, then by event (check-in before check-out)
times.sort(key=lambda x: (x[0], -x[1]))

# count the number of customers at each time and keep track of the maximum number of customers and the P period
current_customers = 0
max_customers = 0
max_period_start = 0
max_period_end = 0
for time, event in times:
    current_customers += event
    if current_customers > max_customers:
        max_customers = current_customers
        max_period_start = time
        max_period_end = None
    elif current_customers <= max_customers and max_period_end is None:
        max_period_end = time
        
P = max_period_end - max_period_start

# output the duration of the P period
if max_customers > K:
    print('The duration of the P period is %d' % P)
else:
    print(0)