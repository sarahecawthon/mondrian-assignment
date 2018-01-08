require "sinatra"

get '/' do 
	erb :index
end



def save_painting(target, painting)
  target.write(painting)

  target.close  
end



get '/store_painting' do
  target = open("paintings.csv", 'a+')
  painting = params["painting"]

  save_painting(target, painting)
end

