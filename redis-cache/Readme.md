# Configuration

### Make sure redis is installed in your machine

- redis-server
- In another tab open
- redis-cli
- ping (if it returns pong then assume everything is working fine till now)
- get Shakespeare (now pass article params to view cached data inside redis-cli)

### Part-1 (to configure local api which we are going to call next)

- git clone repo
- cd [REST-wiki-API](https://github.com/roshangrewal/wd-archive/tree/master/REST-wiki-API)
- npm install
- nodemon app.js
- go-to localhost:3000/articles
- post some data using postman post method for keys: title and content

### Part-2 (to make redis request)

- cd redis-cache
- npm install
- nodemon app.js
- go-to localhost:5000/article/Shakespeare

## What is difference between Memcached Vs Redis

Memcached is a full-memory data buffering system. Although Redis supports data persistence, the full-memory is the essence of its high performance. For a memory-based store, the size of the memory of the physical machine is the maximum data storing capacity of the system. If the data size you want to handle surpasses the physical memory size of a single machine, you need to build distributed clusters to expand the storage capacity.
Memcached itself does not support distributed mode. You can only achieve the distributed storage of Memcached on the client side through distributed algorithms such as Consistent Hash. The figure below demonstrates the distributed storage implementation schema of Memcached. Before the client side sends data to the Memcached cluster, it first calculates the target node of the data through the nested distributed algorithm that in turn directly sends the data to the node for storage. But when the client side queries the data, it also needs to calculate the node that serves as the location of the data queried, and then send the query request to the node directly to get the data.

![Memcached Vs Redis](https://www.oditeksolutions.com/wp-content/uploads/2018/08/RedisVsMemcached.jpg)

Compared with Memcached which can only achieve distributed storage on the client side, Redis prefers to build distributed storage on the server side. The latest version of Redis supports distributed storage. Redis Cluster is an advanced version of Redis that achieves distributed storage and allows SPOF. It has no central node and is capable of linear expansion. The figure below provides the distributed storage architecture of Redis Cluster. The inter-node communication follows the binary protocol but the node-client communication follows the ASCII protocol. In the data placement policy, Redis Cluster divides the entire key numerical range into 4,096 hash slots and allows the storage of one or more hash slots on each node. That is to say, the current Redis Cluster supports a maximum of 4,096 nodes. The distributed algorithm that Redis Cluster uses is also simple: crc16 (key) % HASH_SLOTS_NUMBER.

Redis Cluster introduces the master node and slave node to ensure data availability in case of SPOF. Every master node in Redis Cluster has two corresponding slave nodes for redundancy. As a result, any two failed nodes in the whole cluster will not impair data availability. When the master node exists, the cluster will automatically choose a slave node to become the new master node.

Conclusion: The performance and memory usage of Redis compared to memcached is relatively similar. Unless you already have a large investment in memcached, going forward redis is the obvious solution.Not only Redis is better option, it enables whole new types of use cases and usage patterns.

Reference:

- [Introduction to Caching (Redis + Node.js)](https://medium.com/tech-tajawal/introduction-to-caching-redis-node-js-e477eb969eab)
- [Redis vs. Memcached: In-Memory Data Storage Systems](https://medium.com/@Alibaba_Cloud/redis-vs-memcached-in-memory-data-storage-systems-3395279b0941)
- [Memcached vs Redis, Which One to Pick?](https://www.linkedin.com/pulse/memcached-vs-redis-which-one-pick-ranjeet-vimal/)
- [Redis Caching in Node.js](https://www.youtube.com/watch?v=oaJq1mQ3dFI)
