## Personal Notes 📝

### Action Items

Need to migrate data and schema within CI/CD pipeline so that changes to database are in sync with development. Need to implement authentication within API, should probably use JWT or event login with google.

### Virtual Private Cloud (VPC)

An isolated private network within a public cloud. Provides isolation and security.

It's your private network within AWS. It isolates your project from other projects you have and other AWS customers.

A VPC provides your EKS cluster with a

- Internal IP Address
- Network segmentation (subnets, routing)
- Fire walls

This is where your cluster runs. EKS doesn't create networking for you. It's like the home to your cluster.

### Subnets

A line of communication within your VPC. Each subnet has its own range of IP addresses.

Types of subnets:

- Public: Has a route to the internal gateway so ec2 instances can access the internet directly.
- Private: No direct internet access. A NAT Gateway is used to access the internet.
- Isolated: No internet access at all. Great for security critical resources.

You might want to use a public subnet for services like web servers or an API gateway.

You might want to use a private subnet for something like a backend application or an internal microservice.

### CIDR block (Classless Inter-Domain Routing block)

Defines a range of IP addresses to that get used in your subnet. The subnets are the slices of your CIDR block.

Example:

```
10.0.0.0/16
```

Network starts at `10.0.0.0`.
The `/16` means the first 16 bits are fixed as the network part.
The rest (16 bits) are for assigning to hosts (IP addresses).

So this supports:

```
10.0.0.0 to 10.0.255.255
```

### NAT Gateway

Allows resources in a private subnet to access the internet without be accessible from the internet itself.

### Persistent Volumes In K8s

Storage in pods is ephemeral so kubernetes stores data elsewhere is persistent volumes, a piece of storage in a cluster.

### Kubernetes

#### `deployment.yaml`

A deployment defines how to run your containerized app. It configures stuff like:

- Which docker images to use
- How many replicas to run
- What environment variables to use
- What ports to use/expose
- How to handle restarts and updates

#### `service.yaml`

A service is a persistent endpoint that exposes your pods via a DNS name. This is used for load balancing. Say for instance you needed to spin up multiple replicas of your service/application, this would be the definition of the entry point for all those replicas, the front door.

#### `configmap.yaml`

A config map is used for storing non sensitive key-value pairs.

#### `secrets.yaml`

Secrets is similar to the config map, only the stuff being stored is usually sensitive information, they're more specially stored by kubernetes.

#### `ingress.yaml`

Ingress is used for configuring how you expose your services to the outside world. An ingress controller is required when using this configuration as this is what actually drives the configuration of ingress.

### NGINX

A high performance web server that also functions as a:

- Reverse Proxy
- Load Balancer
- HTTP cache
- Ingress Controller

#### Reverse Proxy

A server that sits in front of your backend services and forwards client requests to the appropriate service.

- Routes multiple services from one domain
- Hides internal services from the public
- Distributes traffic across servers
