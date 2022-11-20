import torch
from diffusers import StableDiffusionPipeline

pipe = StableDiffusionPipeline.from_pretrained("./stable-diffusion-v1-5", revision="fp32",torch_dtype=torch.float32)
pipe = pipe.to("cuda")
pipe.enable_sequential_cpu_offload()
#pipe.enable_xformers_memory_efficient_attention()

counter = 0
while True:
    
    prompt = input("prompt: ")
    image = pipe(prompt, height=240, width=240, num_inference_steps = 50)
    print(image)
    image = image.images[0] 
    image.save("img"+str(counter)+".png")
    counter += 1


