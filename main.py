import cohere
from transformers import pipeline, set_seed
import random
import requests
from flask import Flask, render_template, request
from multiprocessing import Process
import os
#import torch
#from diffusers import StableDiffusionPipeline

app = Flask(__name__, template_folder='template', static_folder='static')

#TODO:
# player dies send message deat and end program 
# 
def runprompt(pipe, prompt):
    image = pipe(prompt, height=240, width=240, num_inference_steps = 50)
    print(image)
    image = image.images[0] 
    name = "img"+str(random.randint(1, 100))+".png"
    image.save(name)
    return name

def addStoryToPrompt(prompt, addition, storyType):
    prompt = prompt + addition + "\n--\n" + "genre: " + storyType 
    return prompt

def addActionToStory(prompt, story, addition, storyType):
    prompt = prompt + story +" "+ addition + "\n--\n" + "genre: " + storyType 
    return prompt

# this function removes the last sentence from the story line because it it most likey not full
def removeLastSen(storyline, numbtorem):
    
    storylineSplit = storyline.split('.')
    #print(storylineSplit)
    newstoryline = ""

    for i in range(len(storylineSplit)-numbtorem):

        
        newstoryline += storylineSplit[i] + "."

    return newstoryline

co = cohere.Client('LZHrKHGZUJxhI7trs3ZjRiCz4yYnD3lyznOOS0nA')
storyLine = ""
storyType = ""
#pipe = StableDiffusionPipeline.from_pretrained("./stable-diffusion-v1-5", revision="fp32",torch_dtype=torch.float32)
#pipe = pipe.to("cuda")
#pipe.enable_sequential_cpu_offload()

# renders the main page
@app.route('/')
def showhtml():
    return render_template('start.html')

@app.route('/menu.html')
def menu():
    return render_template('menu.html')

@app.route('/intialGet')
def startstory():
    global storyLine, storyType
    prompt = ""
    # REMEMBER TO ADD THE FUNCTION FOR THIS ON THE MAIN PAGE
    
    # opens the files that corresponds with the story type 
    with open((storyType + ".txt"), "r") as f:
        prompt = prompt + f.read().strip()
    temps = random.randint(3, 5)

    #generates a story using a high level of temp 
    response = co.generate(  
    model='xlarge',  
    prompt = prompt,  
    max_tokens=70,  
    temperature=temps)

    story = response.generations[0].text
    
    storyLine = str(removeLastSen(story.replace('story:', '').replace('\n', ''), 1))
    #print(storyLine)
    
    return storyLine

@app.route('/main.html')
def stories():
    global storyType
    if request.args.get('msg') != None:
        storyType = request.args.get('msg')
    
    return render_template('main.html')

@app.route('/get')
def hmtlstory():
    global storyLine, pipe

    action = request.args.get('msg')

    print(action)
    # storyline = addActionToStory(storyline, story, action, storyType)
    
    if action == "q":
        return storyLine
    
    storyLine = storyLine + " " + "you " + action + "."
    #print(storyLine)
    
    tokens = random.randint(25, 45)
    temps = random.randint(20, 35)/10

    response = co.generate(  
    model='xlarge',  
    prompt = storyLine,  
    max_tokens=tokens,  
    temperature=temps, 
    presence_penalty= 0.3)

    story = removeLastSen(response.generations[0].text, 1)
    
    story = str(story.replace('story:', '').replace('\n', ''))

    storyLine = storyLine + " " + story
    #print(story)
    #runprompt(pipe, story)
    return story
    


def main():
    app.run(port=5000, debug=True)
   
main()
